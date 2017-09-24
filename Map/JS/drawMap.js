//会地图图层的方法定义


//计算两点之间距离的方法
		
		function getDistance(x1,y1,x2,y2){
		 
		  return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
		}
		
//判断鼠标是否点击到景点,如果点击到弹出景点的相关信息
		
		function  isOnRightLoca(x,y){
		    
			var nowDistance = 0; 
			
			for(var i = 1 ; i <= viewSpotCount ; i++ ){
			  
			       nowDistance = getDistance(x,y,viewSpots[i].x,viewSpots[i].y);
				   
				   if(nowDistance >= 0 && nowDistance <= 10){
				     
					 alert(viewSpots[i].name+": "+viewSpots[i].info );
					 
					 return false;
				   
				   }				   
		    }
		}

//计算当前坐标信息
		
       function getMousePos(canvas, evt) { 
             var rect = canvas.getBoundingClientRect(); 
			 
                return { 
                   x: evt.clientX - rect.left * (canvas.width / rect.width),
                   y: Math.ceil(evt.clientY - rect.top * (canvas.height / rect.height))
             }
         }		

//在指定位置绘制文字 
		 
		function drawText(x,y,content,textSize,textColor){
		     
			 cxt.font = textSize;
		     
			 cxt.fillStyle = textColor; //地图文字颜色
			 
			 cxt.fillText(content,x,y);
		  
		  }	
		  
//绘制导航系
		 
		 function drawN(cxt){
		   
		   cxt.beginPath();
		   
		   cxt.moveTo(80,70);
		   
		   cxt.lineTo(80,20);
		   
		   cxt.lineTo(70,30);
		   
		   cxt.moveTo(80,20);
		   
		   cxt.lineTo(90,30);
		   
		   cxt.lineWidth = 3;
		   
           drawText(95,50,"N","30px Courier New","#66CD00");
		   
           cxt.strokeStyle = "#66CD00"; 

           cxt.stroke();
		   
		   cxt.closePath();
		 
		 }
//绘制地图上地点加名字的方法定义

        function drawViewSpots(cxt){
		        
		   for(var  i = 1 ; i<= viewSpotCount ; i++ ){
		      
			  cxt.beginPath();
			  
			  cxt.moveTo(viewSpots[i].x , viewSpots[i].y)
			  
			  cxt.arc(viewSpots[i].x,viewSpots[i].y,6,0,2*Math.PI,true);
			  
			  drawText(viewSpots[i].x+5 , viewSpots[i].y-5 , viewSpots[i].name,"6px Courier New","#32CD32");
			  
			  cxt.lineWidth = 3;

              cxt.strokeStyle = "#32CD32"; //地图景点颜色

              cxt.stroke();
			  
			  cxt.closePath();
		   
		   }		
		
		} 		

 //绘制地图上的路径

		function drawViewPaths(cxt){
		   for(var i = 1 ; i <= viewSpotCount ; i++){
		        
				cxt.beginPath();
				
				cxt.moveTo(viewSpots[i].x , viewSpots[i].y);
				
			 for(var j = 1 ; j <= viewSpotCount ; j++){
			    
				if(viewMar[i][j] != 0 && viewMar[i][j] != 100000){
				   
				   cxt.lineTo(viewSpots[j].x , viewSpots[j].y);
				   
				}
			    cxt.lineWidth = 3; 		   
		  
		        cxt.strokeStyle = "#8B1C62"; //地图路径颜色

                cxt.stroke();	
				
				cxt.moveTo(viewSpots[i].x , viewSpots[i].y);
			 }
		     cxt.closePath(); 
		   }
		}		
				  