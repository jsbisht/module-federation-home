for folder in $(find . -type d -name "my-books-*")
do
    cd $folder
    npm i
    cd -
done
