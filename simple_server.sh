case $1 in
	"start" )
                echo "start python SimpleHTTPServer"
		python -m SimpleHTTPServer 10000 > /tmp/nohup.out &
		;;
	"stop" )
		echo "stop python SimpleHTTPServer"
		ps aux | grep "SimpleHTTPServe" | grep -v grep | awk '{print $2}' | xargs kill -9
		#kill `ps aux | grep "python -m SimpleHTTPServer"` | grep -v grep | awk '{print $2}' > /dev/null 
		;;
	"restart" )
		echo "restart python SimpleHTTPServer"
		ps aux | grep "SimpleHTTPServe" | grep -v grep | awk '{print $2}' | xargs kill -9
		python -m SimpleHTTPServer 10000 > /tmp/nohup.out &
		;;
	*)
		echo "need start|stop|restart"
		exit 1
esac

