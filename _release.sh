# 构建类型 build/生产, uat/预发布
build_type="build" 

commit_msg1="merge branch master to package" 
commit_msg2="package at `date`" 

git pull origin master && 
git merge master && 
git add -A && 
git commit -m ${commit_msg1} && 
git push -u origin package && 

# 项目构建阶段
if [ $build_type == "build" ];then
  npm run build && 
fi

if [ $build_type == "uat" ];then
  npm run uat && 
fi

git add -A &&
git commit -m ${commit_msg2} && 
git push -u origin package 
