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