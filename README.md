# Git practice

## Keynote

1. Setup and Config
2. Getting and Creating Projects
3. Basic Snapshotting
4. Branching and Merging
5. Sharing and Updating Projects
6. Inspection and Comparison
7. Patching
8. Debugging
9. Hands On practice
10. What is next?

## 1. Setup and Config

Installation and official site: https://git-scm.com/

### Reference

- git - https://git-scm.com/docs/git
- config - https://git-scm.com/docs/git-config
- help - https://git-scm.com/docs/git-help

### Hands On

- Install git on your computer https://git-scm.com/downloads
- Register on gitHub.
- Create an SSH key and set up your public key.
- Familiarize with git CLI.
- Create your custom config. See files: `/config-files`

## 2. Getting and Creating Projects

### Reference

- init - https://git-scm.com/docs/git-init
- clone - https://git-scm.com/docs/git-clone

### Hands On

- Clone this repository: https://github.com/hittten/git-practice
- Create your own local repository.

## 3. Basic Snapshotting

### Reference

- add - https://git-scm.com/docs/git-add
- status - https://git-scm.com/docs/git-status
- diff - https://git-scm.com/docs/git-diff
- commit - https://git-scm.com/docs/git-commit
- reset - https://git-scm.com/docs/git-reset

### Hands On

before you start run `./move/to init`

- Create a file `src/your-name.txt` and put your full name inside.
- Open `src/everybody.txt` file and add your full name in a new line.
- Familiarize with changes `git status`
- See the changes in other way `git status -sb`
- Try to use an alias that you set up before in `.gitconfig`. For example `git st`
- Prepare files to commit with `git add .` and see again the changes `git st` and `git status`
- Update the file `src/everybody.txt` and `src/your-name.txt` and add a new line in the end of file and run `git st` and
  see the differences
- You can compare the differences between `git diff`
- Let's start again run `git reset`, `git st` and `git df`. The last one is an alias.
- Let's delete everything `git reset HEAD --hard`, `git st` and `git clean -df`

## 4. Branching and Merging

### Reference

- branch - https://git-scm.com/docs/git-branch
- checkout - https://git-scm.com/docs/git-checkout
- merge - https://git-scm.com/docs/git-merge
- log - https://git-scm.com/docs/git-log
- stash - https://git-scm.com/docs/git-stash
- tag - https://git-scm.com/docs/git-tag

### Hands On

- Let's create a new branch `git branch practice-your-name`
- To move to the new branch `git checkout practice-your-name`
  * If we want to do it in one move, we can use `git checkout -b practice-your-name` or with our
    alias `git co -b practice-your-name`
- Create a file `src/your-name.txt` and put your full name inside.
- Open `src/everybody.txt` file and add your full name in a new line.
- Let's make our first commit `git commit -m "putting my name on the list"`
  * Getting an error, maybe you forgot to prepare the files for commit first?
- Let's learn how the git tree works `git log` or better `git lg`. Look were is "HEAD" mark.
- Go to de main branch `git co dev` and see what happen with your files.
- Let's merge branches `git merge practice`. Now your files are back.

## 5. Sharing and Updating Projects

### Reference

- fetch - https://git-scm.com/docs/git-fetch
- pull - https://git-scm.com/docs/git-pull
- push - https://git-scm.com/docs/git-push
- remote - https://git-scm.com/docs/git-remote

### Hands On

- Let's update our remote references `git fetch -p` and run `git lg` see the new references.
- Look where are the remote references `git remote show origin`
- Push your branch to remote repository `git push origin practice-your-name`
- Pull other branch to your local repository `git pull origin dev` and go there `git co dev`
