
//地图导航系统的相关方法定义
var num = 1;
//求地图最短路径方法定义

           function searchShortestPath(start, end){
	
	                 var dist = new Array(maxViewSpotCount+1);//存储最短路径的数组
	
	                 var path = new Array(maxViewSpotCount+1); //存储该节点的前驱节点
	
	                 var S = new Array(maxViewSpotCount+1);//存储该节点是否被访问过
	
	                 //alert(maxViewSpotCount);
					 
					 var mindis = 100000, i , j , u ;
					 
					 //对数组进行初始化
					 
					 for( i = 1 ; i <= viewSpotCount ; i++ ){
					   
					            dist[i] = viewMar[start][i];
					   
					            S[i] = 0;
					   
					        if(viewMar[start][i] < 100000){
						   
						        path[i] = start;
						   
					        }
					   
					        else{
						   
						        path[i] = -1;
						   
					        }
					  }
					 
					    S[start] = 1 ; //把被访问过的记录下来
						
					    //document.write("S["+start+"]:"+S[start]+"&nbsp");
					    for( i = 1 ; i< viewSpotCount ; i++){
					   
					            mindis = 100000;
					   
					           //寻找当前点出发所可以走得路径的最小值
					   
					            for(j = 1 ; j <= viewSpotCount ; j++){
						      
									  if(S[j] == 0 && dist[j] < mindis){
										
										u = j;
										
										mindis = dist[j];
									  
									  }
						        }
						
						       S[u] = 1; //把被访问过的节点进行标记
						      //  document.write("S["+u+"]:"+S[u]+"&nbsp"); 
						      //对数组进行更新
						
						        for(j = 1 ; j <= viewSpotCount ; j++){
						  
						           if(S[j] == 0){
						      
									   if(viewMar[u][j] < 100000 && dist[u]+viewMar[u][j] < dist[j]){
										 
										 dist[j] = dist[u] + viewMar[u][j];
										 
										 path[j] = u;
										 
									     }
						            }
						        }
					    }
		//测试使用			   
		///////////////////////////////////////////////////////////			   
		/*			   document.write("</br>");
					for(var a = 1 ;a <= S.length-1 ; a++){
								
								document.write(S[a]+"&nbsp");
					} */
	  ////////////////////////////////////////////////////////////						
					return DispAPath(dist , path , S , start , end);
	              }

			      function DispAPath(dist , path , S , start , end){
				           
							var j , k ; 
							
							var apath = new Array(maxViewSpotCount+1);
							
							var d ; 
							
					        // alert("s[end] = "+S[end]+"start = "+start + "end = "+end );
					       if(S[end] == 1 && end != start){
					               //alert("hello");
						           d = 1 ; apath[d] = end;
						
						           k = path[end];
						           //alert(k);
						           if(k == -1)
						
						             alert("无路径");
						  
						           else{
						  
						                while(k != start){
						     
							                d++;
							              //   alert(k);
							                apath[d] = k;
							                  
							                k = path[k];
						  
						                }
						  
						                d++;
						              //  alert(start);
						                apath[d] = start;
										
						
						           }  
						
					        }
							//alert("d = "+d);
							//alert("apath len = "+apath.length);
					return apath.slice(1,d+1);
				  }
				  
//输出地图上某一景点到另一个指定景点的所有路径，并且该路径所经过的地点个数为<=8;	

var path = new  Array(maxViewSpotCount+1);

var visited = new Array(maxViewSpotCount+1);

function allPath( cxt ,start , end){
   
	 
	 for(var j = 1 ; j <= maxViewSpotCount ; j++ )  visited[j] = 0;

	 visited[start] = 1; 

	 path[1] = start ; 
    // alert("hello"+path[1]);
	 paths(cxt,start,end,1);

}



function  paths( cxt , start ,  end ,  n ){
   
    var k = n+1;

	if(path[n] == end && n <= 8){
	 
	 // var m = Math.ceil((Math.random()*15+1));
	  alert("第"+num+"条可行路径");
	  setTimeout(drawPath(cxt,path.slice(1,n+1),colors[num]),2000);
	  num = num+1;
     
	 return ;
	
	}

    for(var a = 1 ; a <= maxViewSpotCount ; a++){
	  
		if(viewMar[path[n]][a] < 100000 && viewMar[path[n]][a] != 0 && visited[a] == 0){
		    
			path[k] = a;
		    
			visited[a] = 1 ;

			paths( cxt , start , end , k);   //注意此处定义的函数名字path()与数组名字不可以一样，否则会报这种错误error C2064: term does not evaluate to a function
		    
			visited[a] = 0;
		}
    
		
	} 
}
	
//画路径方法定义
            
			function drawLine(cxt,x,y){
				
				cxt.lineTo(x,y);
			}
			
            function drawPath(cxt,array,color){
				
				drawN(cxt);		
			
		        drawViewSpots(cxt); 
		
                drawViewPaths(cxt); 
				
				cxt.beginPath();
				
				cxt.moveTo(viewSpots[array[array.length-1]].x,viewSpots[array[array.length-1]].y);
				
				for(var i = array.length-2 ; i>= 0 ;i--){
					
					setInterval(drawLine(cxt,viewSpots[array[i]].x,viewSpots[array[i]].y),4000);
				}
				
				cxt.strokeStyle = color; 

                cxt.stroke();
		   
		        cxt.closePath();
				
			}





