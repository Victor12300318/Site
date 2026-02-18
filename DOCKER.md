# HDS Serviços - Site Dockerizado

## 🚀 Deploy Rápido

### Pré-requisitos
- Docker instalado
- Docker Compose instalado

### Deploy

```bash
# Clone ou entre na pasta do projeto
cd Site

# Subir o container
docker-compose up -d

# Acessar o site
# Local: http://localhost:8080
# Rede: http://SEU_IP:8080
```

### Comandos Úteis

```bash
# Ver logs
docker-compose logs -f

# Parar o container
docker-compose down

# Rebuild (após alterações)
docker-compose up -d --build

# Ver status
docker-compose ps
```

## 📝 Configurações

- **Porta**: 8080 (pode ser alterada no docker-compose.yml)
- **Container**: hds-site
- **Nginx**: Otimizado para SPA (Single Page Application)

## 🔧 Personalização

Para alterar a porta, edite o `docker-compose.yml`:
```yaml
ports:
  - "SUA_PORTA:80"
```
