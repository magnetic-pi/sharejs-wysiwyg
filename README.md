sharejs-wysiwyg
===============

ShareWysiwyg is an editor that combines the best of both:   ShareJS - https://github.com/share/ShareJS bootstrap-wysiwyg - https://github.com/mindmup/bootstrap-wysiwyg/
The goal of this project is to offer a easy to implement collaborative WYSIWYG editor.

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
    bash -x simple_server.sh start|stop|restart

##Start the share server:
    bash -x share_server.sh start|stop|restart

##Trying the Demo
After starting the servers navigate to http://localhost:10000/Tiny.html


##Implementation

To implement on your site. Set the class on the textarea to be editor-textarea:

    <textarea id="textarea" class="editor-textarea" placeholder="this is a test"></textarea>

Create a div area and set the class to be editor:

    <div id="textarea-editor" class="editor" contenteditable="true"></div>                                                                  
