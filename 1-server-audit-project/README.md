What the Script Does


Collects the system hostname (computer name)
Identifies the current logged-in user
Records the current date
Checks disk usage on the root partition (/)
Reads memory usage from the system
Captures system uptime (how long the system has been running)
Compares disk usage against a defined threshold and prints a warning if it is exceeded
Saves the entire report to a .txt file in the user's home directory



Prerequisites


macOS or Linux operating system
Bash shell (pre-installed on both)
Terminal access
No external packages or installations required



How to Use

1. Save the script

Save the script as daily-server-audit.sh in your preferred directory.

2. Make it executable

bashchmod +x daily-server-audit.sh

3. Run the script

bash./daily-server-audit.sh

4. View the report

bashcat ~/system-report.txt


Script Breakdown

Here is a detailed explanation of every part of the script.


Section 1 — Collecting System Information

bashHOSTNAME=$(hostname)
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | tr -d '%')
MEMORY_USAGE=$(top -l 1 | grep PhysMem)
CURRENT_USER=$(whoami)
UPTIME=$(uptime)
CURRENT_DATE=$(date +%y-%m-%d)

Each line here runs a system command and stores the result in a variable. The $(...) syntax means "run this command and save its output."

VariableCommand UsedWhat It CapturesHOSTNAMEhostnameThe name of the computer/serverDISK_USAGEdf -h /Disk space usage percentage on the root partitionMEMORY_USAGEtop -l 1Physical memory (RAM) usage summaryCURRENT_USERwhoamiThe username of whoever is running the scriptUPTIMEuptimeHow long the system has been on since last rebootCURRENT_DATEdate +%y-%m-%dToday's date in YY-MM-DD format

Breaking down the DISK_USAGE line specifically:

bashDISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | tr -d '%')

This is a pipeline — three commands chained together:


df -h / — lists disk usage for the root partition in human-readable format
awk 'NR==2 {print $5}' — grabs the 5th column (the percentage) from the second row
tr -d '%' — strips the % symbol so we are left with just the number (e.g. 58 instead of 58%)



We strip the % because we need a plain number to compare against the threshold later.




Section 2 — Defining the Threshold

bashTHRESHOLD=20

This sets the disk usage warning level. If disk usage goes above this number, the script prints a warning in the report. The value 20 means 20%.


You can change this number to whatever makes sense for your system. A common real-world value is 80.




Section 3 — Setting the Report File Path

bashREPORT_FILE="$HOME/system-report.txt"

$HOME is a built-in variable that always points to the current user's home directory (e.g. /Users/macbookm2 on macOS or /home/username on Linux). The report will always be saved there regardless of where the script is run from.


Section 4 — Writing the Report

bash{
echo "DAILY SERVER REPORT"
echo ""
echo "hostname: $HOSTNAME"
echo "user: $CURRENT_USER"
echo "date: $CURRENT_DATE"
echo "disk usage: $DISK_USAGE"
echo "memory usage: $MEMORY_USAGE"
echo "uptime: $UPTIME"
...
} > "$REPORT_FILE"

The curly braces { } group all the echo commands together. The > "$REPORT_FILE" at the end redirects all their output into the report file instead of printing it to the screen.


> overwrites the file each time the script runs. This means every time you run the script, you get a fresh report — old data is replaced.




Section 5 — Disk Usage Warning

bashif [ "$DISK_USAGE" -gt "$THRESHOLD" ]; then
    echo "WARNING!!!: Disk usage ${DISK_USAGE}% has exceeded ${THRESHOLD}%"
else
    echo "Disk usage ${DISK_USAGE}% is below threshold ${THRESHOLD}%"
fi

This is an if/else statement — it checks a condition and acts based on the result.


-gt means greater than
If disk usage is greater than the threshold → print a WARNING
If disk usage is at or below the threshold → print an OK message


OperatorMeaning-gtGreater than-ltLess than-eqEqual to-geGreater than or equal to-leLess than or equal to


Section 6 — Confirmation Message

bashecho ""
echo "Report saved to $REPORT_FILE"

After the report is saved, the script prints a confirmation message to the terminal so the user knows exactly where to find the file.


Sample Output

Here is what system-report.txt looks like after running the script:

DAILY SERVER REPORT

hostname: havoc
user: macbookm2
date: 26-06-28
disk usage: 58
memory usage: PhysMem: 16G used (2159M wired, 4078M compressor), 189M unused.
uptime:  12:50  up 3 days, 4:22, 2 users, load averages: 1.45 1.52 1.61

WARNING!!!: Disk usage 58% has exceeded 20%


Configuration

You can customize the script by changing these two values:

SettingVariableDefaultDescriptionDisk thresholdTHRESHOLD20Percentage at which a warning is triggeredReport locationREPORT_FILE$HOME/system-report.txtWhere the report file is saved

Example — change the threshold to 80%:

bashTHRESHOLD=80

Example — save the report to a logs folder instead:

bashREPORT_FILE="$HOME/logs/system-report.txt"


If you change the path, make sure the folder exists first: mkdir -p ~/logs




Key Concepts Explained

Variables

Containers that store values. Defined as NAME=value and accessed as $NAME.

Command Substitution $(...)

Runs a command and stores its output into a variable.

bashHOSTNAME=$(hostname)   # runs hostname and saves the result

Pipelines |

Chains commands together so the output of one becomes the input of the next.

bashdf -h / | awk 'NR==2 {print $5}' | tr -d '%'

Output Redirection >

Sends output to a file instead of the terminal.

bash{ echo "hello" } > report.txt

if/else Statement

Makes decisions based on conditions.

bashif [ condition ]; then
    # do this if true
else
    # do this if false
fi

$HOME

A built-in environment variable that always holds the path to the current user's home directory.


