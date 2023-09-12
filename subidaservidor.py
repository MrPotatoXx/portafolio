import subprocess
import paramiko
import os
from dotenv import load_dotenv

# Cargar las variables de entorno desde un archivo .env
load_dotenv()

# Función de callback para mostrar progreso
def print_progress(transferred, to_be_transferred):
    percentage = (transferred / to_be_transferred) * 100
    progress_bar_length = 50  # Longitud de la barra de progreso
    block = int(round(progress_bar_length * percentage / 100))
    progress_bar = "#" * block + "-" * (progress_bar_length - block)
    print(f"Progress: [{progress_bar}] {percentage:.2f}%")

# Función para subir archivos de forma recursiva
def upload_files(sftp, local_directory, remote_directory):
    for filename in os.listdir(local_directory):
        local_path = os.path.join(local_directory, filename)
        remote_path = os.path.join(remote_directory, filename)
        if os.path.isdir(local_path):
            try:
                sftp.mkdir(remote_path)
            except IOError:
                pass  # Si el directorio ya existe, continuamos
            upload_files(sftp, local_path, remote_path)
        else:
            sftp.put(local_path, remote_path, callback=print_progress)

# Ejecutar "npm run build"
try:
    subprocess.run(["npm", "run", "build"], check=True, shell=True)
except subprocess.CalledProcessError:
    print("Error al ejecutar npm run build")
    exit(1)

# Configuración SSH
hostname = "potatox.me"
username = "mrpotatox"
password = os.getenv("SSH_PASSWORD")

# Conexión SSH y transferencia de archivos
try:
    # Iniciar cliente SSH
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(hostname, username=username, password=password)

    # Iniciar cliente SFTP
    sftp = ssh.open_sftp()

    # Llamar a la función para subir archivos
    upload_files(sftp, "dist", "/srv/www/html/")

    # Cerrar conexiones
    sftp.close()
    ssh.close()

except Exception as e:
    print(f"Ocurrió un error durante la transferencia SSH: {e}")
    exit(1)
