#!/bin/bash
ionic build --prod
if [ $? -eq 0 ]; then
  echo BUILD SUCCESS
  cd www
  git commit -am "Pushing to github pages"
  git push origin gh-pages
  cd ..
else
  echo BUILD FAILED
fi
