#!/bin/bash

set -e

cd "$(dirname "$0")/.."

echo "Checking and building the website..."
npm run check
npm run build

echo "Preparing the finished website..."
cp -R dist/. .

if ! git diff --check; then
  echo "Please fix the formatting issue shown above, then try again."
  exit 1
fi

git add -A

if git diff --cached --quiet; then
  echo "There are no saved changes to publish."
  exit 0
fi

message="${1:-Update website}"
git commit -m "$message"
git push origin HEAD

echo "Your changes were sent to GitHub. The live site normally updates within a few minutes."
