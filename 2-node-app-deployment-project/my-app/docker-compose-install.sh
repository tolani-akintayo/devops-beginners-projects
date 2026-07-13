# Create the local CLI plugins directory
mkdir -p ~/.docker/cli-plugins

# Fetch the latest version string and download the correct binary for your architecture
COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | cut -d '"' -f 4)
curl -SL "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-linux-$(uname -m)" -o ~/.docker/cli-plugins/docker-compose

# Grant executable permissions to the downloaded file
chmod +x ~/.docker/cli-plugins/docker-compose

#verify the installation
docker compose version

