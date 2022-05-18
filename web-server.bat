echo "> pet-brunch-app docker image build

call ./gradlew clean bootBuildImage

call wsl -d docker-desktop sysctl -w vm.max_map_count=262144

echo "> docker-compose up"

call docker-compose -f ./dockerized/docker-compose.yml up -d