
export interface GitCommand {
  command: string;
  description: string;
}

export interface CommandCategory {
  id: string;
  title: string;
  subtitle: string;
  commands: GitCommand[];
}

export const gitCommandData: CommandCategory[] = [
  {
    id: "checking",
    title: "Checking",
    subtitle: "Inspecting and Viewing",
    commands: [
      {
        command: "git status",
        description: "Check the status of the working directory (untracked, modified, staged files)."
      },
      {
        command: "git log",
        description: "View commit history."
      },
      {
        command: "git log --oneline",
        description: "View concise commit history (one line per commit)."
      },
      {
        command: "git log --graph",
        description: "View commit history with a branch graph."
      },
      {
        command: "git log -p",
        description: "View commit history with changes (patch format)."
      },
      {
        command: "git log --author=\"username\"",
        description: "View commits by a specific author."
      },
      {
        command: "git log --since=\"2023-01-01\" --until=\"2023-12-31\"",
        description: "View commits within a date range."
      },
      {
        command: "git show <commit-hash>",
        description: "Show details of a specific commit."
      },
      {
        command: "git diff",
        description: "Show unstaged changes in the working directory."
      },
      {
        command: "git diff --staged",
        description: "Show changes staged for the next commit."
      },
      {
        command: "git diff <commit1> <commit2>",
        description: "Show differences between two commits."
      },
      {
        command: "git blame <file>",
        description: "Show who last modified each line of a file."
      },
      {
        command: "git remote -v",
        description: "List remote repositories (with URLs)."
      },
      {
        command: "git branch",
        description: "List local branches."
      },
      {
        command: "git branch -r",
        description: "List remote branches."
      },
      {
        command: "git branch -a",
        description: "List all branches (local and remote)."
      },
      {
        command: "git tag",
        description: "List all tags."
      },
      {
        command: "git config --list",
        description: "List all Git configurations."
      },
      {
        command: "git config --get user.name",
        description: "Get the configured username."
      },
      {
        command: "git config --get user.email",
        description: "Get the configured email."
      },
      {
        command: "git reflog",
        description: "Show a log of all reference changes (e.g., branch switches, resets)."
      }
    ]
  },
  {
    id: "creating",
    title: "Creating",
    subtitle: "Adding new items",
    commands: [
      {
        command: "git init",
        description: "Initialize a new Git repository in the current directory."
      },
      {
        command: "git clone <repository-url>",
        description: "Clone a remote repository to your local machine."
      },
      {
        command: "git clone --branch <branch-name> <repository-url>",
        description: "Clone a specific branch of a repository."
      },
      {
        command: "git clone --depth 1 <repository-url>",
        description: "Clone only the latest commit (shallow clone)."
      },
      {
        command: "git branch <branch-name>",
        description: "Create a new branch."
      },
      {
        command: "git checkout -b <branch-name>",
        description: "Create and switch to a new branch."
      },
      {
        command: "git switch -c <branch-name>",
        description: "Create and switch to a new branch (Git 2.23+)."
      },
      {
        command: "git tag <tag-name>",
        description: "Create a lightweight tag."
      },
      {
        command: "git tag -a <tag-name> -m \"tag message\"",
        description: "Create an annotated tag."
      },
      {
        command: "git add <file>",
        description: "Stage a file for commit."
      },
      {
        command: "git add .",
        description: "Stage all changes in the working directory."
      },
      {
        command: "git commit -m \"commit message\"",
        description: "Commit staged changes with a message."
      },
      {
        command: "git commit -am \"commit message\"",
        description: "Stage and commit all tracked files in one command."
      },
      {
        command: "git commit --amend",
        description: "Amend the previous commit (e.g., change message or add files)."
      },
      {
        command: "ssh-keygen -t ed25519 -C \"your_email@example.com\"",
        description: "Generate a new SSH key (Ed25519)."
      },
      {
        command: "ssh-keygen -t rsa -b 4096 -C \"your_email@example.com\"",
        description: "Generate a new SSH key (RSA)."
      },
      {
        command: "git config --global credential.helper store",
        description: "Save HTTPS credentials permanently."
      },
      {
        command: "git config --global credential.helper cache",
        description: "Cache HTTPS credentials for a short time."
      },
      {
        command: "gh auth login",
        description: "Log in to GitHub CLI (GitHub Token)."
      },
      {
        command: "gh auth status",
        description: "Check GitHub CLI authentication status."
      },
      {
        command: "gpg --full-generate-key",
        description: "Generate a new GPG key."
      },
      {
        command: "gpg --list-secret-keys --keyid-format LONG",
        description: "List GPG keys."
      },
      {
        command: "git config --global user.signingkey <GPG-key-id>",
        description: "Set a GPG key for signing commits."
      },
      {
        command: "git commit -S -m \"signed commit\"",
        description: "Create a signed commit."
      }
    ]
  },
  {
    id: "changing",
    title: "Changing",
    subtitle: "Modifying existing items",
    commands: [
      {
        command: "git checkout <branch-name>",
        description: "Switch to an existing branch."
      },
      {
        command: "git switch <branch-name>",
        description: "Switch to an existing branch (Git 2.23+)."
      },
      {
        command: "git merge <branch-name>",
        description: "Merge a branch into the current branch."
      },
      {
        command: "git rebase <branch-name>",
        description: "Rebase the current branch onto another branch."
      },
      {
        command: "git rebase --interactive <commit-hash>",
        description: "Interactive rebase (squash, edit, reorder commits)."
      },
      {
        command: "git branch -m <new-branch-name>",
        description: "Rename the current branch."
      },
      {
        command: "git branch -m <old-name> <new-name>",
        description: "Rename a branch."
      },
      {
        command: "git reset --soft <commit-hash>",
        description: "Reset to a commit, keeping changes staged."
      },
      {
        command: "git reset --mixed <commit-hash>",
        description: "Reset to a commit, unstaging changes (default)."
      },
      {
        command: "git reset --hard <commit-hash>",
        description: "Reset to a commit, discarding all changes."
      },
      {
        command: "git revert <commit-hash>",
        description: "Create a new commit that undoes a previous commit."
      },
      {
        command: "git cherry-pick <commit-hash>",
        description: "Apply a specific commit to the current branch."
      },
      {
        command: "git remote add <name> <repository-url>",
        description: "Add a new remote repository."
      },
      {
        command: "git remote set-url <name> <new-url>",
        description: "Change the URL of a remote repository."
      },
      {
        command: "git remote rename <old-name> <new-name>",
        description: "Rename a remote repository."
      },
      {
        command: "git fetch <remote>",
        description: "Fetch changes from a remote repository."
      },
      {
        command: "git pull <remote> <branch>",
        description: "Fetch and merge changes from a remote branch."
      },
      {
        command: "git push <remote> <branch>",
        description: "Push changes to a remote branch."
      },
      {
        command: "git push --set-upstream <remote> <branch>",
        description: "Push and set the upstream branch."
      },
      {
        command: "git push --force",
        description: "Force push changes (use with caution)."
      },
      {
        command: "git push --force-with-lease",
        description: "Force push changes only if the remote branch hasn't changed."
      },
      {
        command: "git push <remote> <tag-name>",
        description: "Push a tag to the remote repository."
      },
      {
        command: "git push <remote> --tags",
        description: "Push all tags to the remote repository."
      },
      {
        command: "git tag -f <tag-name>",
        description: "Move a tag to a different commit."
      },
      {
        command: "git push <remote> --delete <tag-name>",
        description: "Delete a remote tag."
      }
    ]
  },
  {
    id: "deleting",
    title: "Deleting",
    subtitle: "Removing items",
    commands: [
      {
        command: "git branch -d <branch-name>",
        description: "Delete a local branch (safe, checks for merge)."
      },
      {
        command: "git branch -D <branch-name>",
        description: "Force delete a local branch (even if unmerged)."
      },
      {
        command: "git push <remote> --delete <branch-name>",
        description: "Delete a remote branch."
      },
      {
        command: "git tag -d <tag-name>",
        description: "Delete a local tag."
      },
      {
        command: "git push <remote> --delete <tag-name>",
        description: "Delete a remote tag."
      },
      {
        command: "git rm <file>",
        description: "Remove a file from the working directory and staging area."
      },
      {
        command: "git rm --cached <file>",
        description: "Remove a file from the staging area (keep in working directory)."
      },
      {
        command: "git clean -f",
        description: "Remove untracked files from the working directory."
      },
      {
        command: "git clean -fd",
        description: "Remove untracked files and directories."
      },
      {
        command: "git reset --hard HEAD~1",
        description: "Delete the last commit and discard changes."
      },
      {
        command: "git reset --soft HEAD~1",
        description: "Delete the last commit but keep changes staged."
      }
    ]
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "Special operations",
    commands: [
      {
        command: "git stash",
        description: "Stash changes in the working directory."
      },
      {
        command: "git stash pop",
        description: "Apply and remove the most recent stash."
      },
      {
        command: "git stash list",
        description: "List all stashes."
      },
      {
        command: "git stash apply <stash-id>",
        description: "Apply a specific stash."
      },
      {
        command: "git stash drop <stash-id>",
        description: "Delete a specific stash."
      },
      {
        command: "git submodule add <repository-url>",
        description: "Add a submodule."
      },
      {
        command: "git submodule update --init --recursive",
        description: "Initialize and update submodules."
      },
      {
        command: "git submodule deinit <submodule-path>",
        description: "Remove a submodule."
      },
      {
        command: "git worktree add <path> <branch>",
        description: "Add a new worktree for a branch."
      },
      {
        command: "git worktree list",
        description: "List all worktrees."
      },
      {
        command: "git worktree remove <path>",
        description: "Remove a worktree."
      },
      {
        command: "ssh-add ~/.ssh/id_ed25519",
        description: "Add an SSH key to the SSH agent."
      },
      {
        command: "ssh-add -l",
        description: "List added SSH keys."
      },
      {
        command: "ssh-add -D",
        description: "Remove all SSH keys from the agent."
      },
      {
        command: "gpg --export-secret-keys <key-id> | base64",
        description: "Export a GPG key in base64 format."
      },
      {
        command: "gpg --import <key-file>",
        description: "Import a GPG key."
      },
      {
        command: "gh auth login --with-token < <token-file>",
        description: "Log in to GitHub CLI using a token."
      },
      {
        command: "gh auth logout",
        description: "Log out of GitHub CLI."
      }
    ]
  }
];
