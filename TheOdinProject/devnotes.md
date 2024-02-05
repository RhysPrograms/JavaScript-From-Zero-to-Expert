## Terminal

### Navigating Files & Directories

`$ pwd`
pwd shows you where you are

`$ mkdir`
The mkdir command allows you to make new directories (folders) in Linux with or without specifying the path

`$ ls [path]`
prints a listing of a specific file or directory; ls on its own lists the current working directory

`$ ls -F -a`
-F lists the contents of the directory, because that’s where we now are:
-a stands for ‘show all’ (including hidden files); it forces ls to show us file and directory names that begin with ., such as .. (which, if we’re in /Users/nelle, refers to the /Users directory). As you can see, it also displays another special directory that’s just called ., which means ‘the current working directory’. It may seem redundant to have a name for it, but we’ll see some uses for it soon.

`$ ls -F /`
ls is the *command*, with an *option* -F and an *argument* /. We’ve already encountered options which either start with a single dash (-), known as short options, or two dashes (--), known as long options. Options change the behavior of a command and Arguments tell the command what to operate on (e.g. files and directories). Sometimes options and arguments are referred to as parameters. A command can be called with more than one option and more than one argument, but a command doesn’t always require an argument or an option.

`$ cd`
It turns out that cd without an argument will return you to your home directory, which is great if you’ve got lost in your own filesystem.

`$ cd /etc`
When you use a relative path with a command like ls or cd, it tries to find that location from where we are, rather than from the root of the file system. However, it is possible to specify the absolute path to a directory by including its entire path from the root directory, which is indicated by a leading slash. The leading / tells the computer to follow the path from the root of the file system, so it always refers to exactly one directory, no matter where we are when we run the command.
`cd ~/Desktop`
To enter your user's Desktop directory, run cd ~/Desktop (the ~ is expanded into your user's home directory).
`$ cd-`
Another shortcut is the - (dash) character. cd will translate - into the previous directory I was in, which is faster than having to remember, then type, the full path. This is a very efficient way of moving back and forth between two directories – i.e. if you execute cd - twice, you end up back in the starting directory. The difference between cd .. and cd - is that the former brings you up, while the latter brings you back.

`$ ls --all` `$ls -a`
When options exist as both short and long options:
    Use the short option when typing commands directly into the shell to minimize keystrokes and get your task done faster.
    Use the long option in scripts to provide clarity. It will be read many times and typed once.

`$ .`
A period (.) represents the current directory., You see it in directory listings if you use the -all option with ls.

`$ ..`
The double period or "double-dot" (..) represents the parent directory of your current one. You can use this to move up one level in the directory tree.

### Working with Files & Directories

`$ touch my_file.txt`
This will create an empty file if the file doesn’t exist.

1. Don’t use spaces.
Spaces can make a name more meaningful, but since spaces are used to separate arguments on the command line it is better to avoid them in names of files and directories. You can use - or _ instead (e.g. north-pacific-gyre/ rather than north pacific gyre/). 

2. Don't begin the name with - (dash)
Commands treat names starting with - as options.

3. Stick with letters, numbers, . (period or ‘full stop’), - (dash) and _ (underscore).

`$ rm [OPTION] [FILE]`
rm stands for remove here. 

`$ mv thesis/draft.txt thesis/quotes.txt`
The first argument tells mv what we’re ‘moving’, while the second is where it’s to go. In this case, we’re moving thesis/draft.txt to thesis/quotes.txt, which has the same effect as renaming the file. By default, mv will not ask for confirmation before overwriting files. However, an additional option, mv -i (or mv --interactive), will cause mv to request such confirmation.

`$ cp quotes.txt thesis/quotations.txt`
The cp command works very much like mv, except it copies a file instead of moving it. 

`$ rm -i thesis_backup/quotations.txt`
The -i (interactive) option will prompt before removal (use Y to confirm deletion or N to keep the file). The Unix shell doesn’t have a trash bin, so all the files removed will disappear forever. By using the -i option, we have the chance to check that we are deleting only the files that we want to remove. rm by default only works on files, not directories. rm can remove a directory and all its contents if we use the recursive option -r, and it will do so without any confirmation prompts


1. The Asterisk (*): The (*) wildcard represents any number of unknown characters. This is useful when searching for documents or files but only remembering a part of its name.
2. The Question Mark (?): The (?) wildcard represents only one unknown character. This is useful when you have a list of similarly named files and unsure of a few characters.
3. The Bracketed Characters ([ ]): The ([ ]) wildcard – the 3rd bracket and not the 1st bracket – is used to match any occurrences of characters defined inside the brackets. This option is handy when dealing with uppercase and lowercase files, as we will see later.