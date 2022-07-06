# #!/usr/bin/env sh

# # abort on errors
# set -e

# # build
# npm run build

# # navigate into the build output directory
# cd dist

# # if you are deploying to a custom domain
# # echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# # if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/FakeStandard/react-lights-out-game.git master:gh-pages

# cd -

# 2022/6/22
# 1. 先在專案資料夾中安裝
# npm install --save gh-pages

# 2022/7/6
# 2. 在 package.json 添加以下
#   "scripts": {
#     ...
#     "deploy": "gh-pages -d build"
#   },
#   "devDependencies": {
#     "@types/node": "^16.11.41",
#     "gh-pages": "^4.0.0"
#   },
#   "homepage": "https://fakestandard.github.io/repository-name/"

# 3. 修改 public/manifest.json
# 4. 修改 public/index.html 內容.icon 等

# final 添加 README.md
# run $ deploy.sh

# 2022/6/6
npm run build

npm run deploy