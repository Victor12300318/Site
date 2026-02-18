@echo off
echo ==========================================
echo    HDS Servicos - Docker Deploy
echo ==========================================
echo.

:: Verificar se Docker esta instalado
docker --version >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Docker nao encontrado!
    echo Instale o Docker Desktop: https://www.docker.com/products/docker-desktop
    pause
    exit /b 1
)

echo [1/4] Verificando Docker...
docker info >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Docker nao esta rodando!
    echo Inicie o Docker Desktop primeiro.
    pause
    exit /b 1
)
echo [OK] Docker esta rodando

echo.
echo [2/4] Limpando containers antigos...
docker-compose down --remove-orphans 2>nul

echo.
echo [3/4] Build e deploy...
docker-compose up -d --build

if errorlevel 1 (
    echo.
    echo [ERRO] Falha no deploy!
    pause
    exit /b 1
)

echo.
echo [4/4] Verificando status...
timeout /t 2 /nobreak >nul

docker-compose ps | findstr "Up" >nul
if errorlevel 1 (
    echo [ERRO] Container nao iniciou corretamente
    docker-compose logs
    pause
    exit /b 1
)

echo.
echo ==========================================
echo    [SUCESSO] Site deployado!
echo ==========================================
echo.
echo Acesse o site em:
echo   - Local:   http://localhost:8080
echo.
echo Para ver logs: docker-compose logs -f
echo Para parar:    docker-compose down
echo.
pause
