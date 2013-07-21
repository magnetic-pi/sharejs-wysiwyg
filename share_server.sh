case $1 in
	"start" )
                echo "start hare server"
		~/./node_modules/share/bin/exampleserver > /tmp/nohup.out &
		;;
	"stop" )
		echo "stop share server"
		ps aux | grep "harejs" | grep -v grep | awk '{print $2}' | xargs kill -9
		#kill `ps aux | grep "python -m SimpleHTTPServer"` | grep -v grep | awk '{print $2}' > /dev/null 
		;;
	"restart" )
		echo "restart share server"
		ps aux | grep "sharejs" | grep -v grep | awk '{print $2}' | xargs kill -9
		~/./node_modules/share/bin/exampleserver > /tmp/nohup.out &
		;;
	*)
		echo "need start|stop|restart"
		exit 1
esac

