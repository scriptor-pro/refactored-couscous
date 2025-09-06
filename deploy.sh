#!/bin/bash
# Script de publication rapide pour jndjs.dev

cd ~/Documents/Projets/refactored-couscous || exit

# Construire localement (optionnel)
npx quartz build

# Ajouter tous les changements
git add .

# Message de commit automatique avec la date
git commit -m "Mise à jour depuis Obsidian ($(date '+%Y-%m-%d %H:%M:%S'))"

# Pousser sur GitHub
git push origin main

echo "✅ Site envoyé sur GitHub. Netlify va le déployer automatiquement sur jndjs.dev"
