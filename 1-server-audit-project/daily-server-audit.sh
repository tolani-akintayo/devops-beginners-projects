#!/bin/bash 

#declaration of variables

HOSTNAME=$(hostname)
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}'| tr -d '%')
MEMORY_USAGE=$(top -l 1 | grep PhysMem)
CURRENT_USER=$(whoami)
UPTIME=$(uptime)
CURRENT_DATE=$(date +%y-%m-%d)


#define disk usage threshold if exceeded

THRESHOLD=20
 
REPORT_FILE="$HOME/system-report.txt"

{
echo "DAILY SERVER  REPORT"
echo ""
echo "hostname: $HOSTNAME"
echo "user: $CURRENT_USER"
echo "date: $CURRENT_DATE"
echo "disk usage: $DISK_USAGE"
echo "memory usage: $MEMORY_USAGE"
echo "uptime: $UPTIME"

#compare the current disk usage against defined threshold and print warning if it exceeds

echo ""
if [ "$DISK_USAGE" -gt "$THRESHOLD" ]; then
echo "WARNING!!!: Disk usage ${DISK_USAGE}%  has exceeded ${THRESHOLD}%"
else
echo "disk usage ${DISK_USAGE}% is below threshold ${THRESHOLD}%"
  fi 
 
} > "$REPORT_FILE"

echo ""

echo "Report saved to $REPORT_FILE"


