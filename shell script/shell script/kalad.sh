#!/bin/sh
remove="/home/kalad/kalad123.text"
newfile="/home/kalad/kalad123.text"
touch $newfile 
echo "the new file has been created "
echo "looking for $remove ......"
sleep 3
rm $remove 
 echo "the file has been removed"



