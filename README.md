sharejs-wysiwyg
===============

ShareWysiwyg is an editor that combines the best of both:   ShareJS - https://github.com/share/ShareJS bootstrap-wysiwyg - https://github.com/mindmup/bootstrap-wysiwyg/

##Requirements
1. NodeJS


##Node Packages
1. sharejs

##Getting Started
1. Install Node Version Manager: https://github.com/creationix/nvm

*     curl https://raw.github.com/creationix/nvm/master/install.sh | sh
*     source ~/.nvm/nvm.sh
*     Add the following to your .bashrc:
        [[ -r $NVM_DIR/bash_completion ]] && . $NVM_DIR/bash_completion 
*     nvm install

##Installing ShareJS and Requirements
1. npm install share
2. cd to the share directory and run
    npm install

##Start The simple server:
    bash -x simple_server.sh start|stop|restert

##Start the share server:
    bash -x share_server.sh start|stop|restart
