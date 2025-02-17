FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y curl && apt-get clean
RUN curl -fsSL https://code-server.dev/install.sh | sh

COPY start-container /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/start-container

EXPOSE 8443

ENTRYPOINT ["start-container"]
