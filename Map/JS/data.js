	
	//相关使用变量定义
	
	var A ;
	
	var B ;
	
	var j ;
	
	//定义地图景点个数的最大量
	 
	  var maxViewSpotCount = 30; 
	 
	 //定义地图景点的个数
	  
	  var viewSpotCount = 30 ; 
	 
	 
	 //定义地图景点的类
	 
	 function createViewSpot(id , name , info , x , y){
	    
		this.id = id;
		
		this.name = name ;
		
		this.info = info;
		
		this.x = x;
		
		this.y = y;
	 
	 }

	 var viewSpots = new Array(maxViewSpotCount+1);
	 
	 viewSpots[1] = new createViewSpot(1,"学府苑","教职工居住地，风景秀丽",500,20);
	 viewSpots[2] = new createViewSpot(2,"檀香苑","女生居住宿舍",200,40);
	 viewSpots[3] = new createViewSpot(3,"象山苑","男生居住宿舍",130,100);
	 viewSpots[4] = new createViewSpot(4,"象山食堂","环境舒适，小吃居多的美食广场",200,150);
	 viewSpots[5] = new createViewSpot(5,"亚青村","曾为青奥会运动员居住地，设施齐全，环境优美",50,200);
	 
	 viewSpots[6] = new createViewSpot(6,"仁智楼","教学楼",400,50);
	 viewSpots[7] = new createViewSpot(7,"同和楼","教学楼",400,130);
	 viewSpots[8] = new createViewSpot(8,"工大小书房","可供聚餐，娱乐",550,58);
	 viewSpots[9] = new createViewSpot(9,"江苏省工业技术创新中心","设备齐全，环境优雅",700,55);
	 viewSpots[10] = new createViewSpot(10,"国家生化技术研究中心","设备齐全，环境舒适",700,150);
	 
	 viewSpots[11] = new createViewSpot(11,"北苑","学生宿舍",180,250);
	 viewSpots[12] = new createViewSpot(12,"逸夫图书馆","外观宏伟，环境优雅，藏书丰富",390,240);
	 viewSpots[13] = new createViewSpot(13,"天工楼","教学楼",430,180);
	 viewSpots[14] = new createViewSpot(14,"垒球场","标准垒球场地",530,170);
	 viewSpots[15] = new createViewSpot(15,"重点实验室","设备齐全，环境优雅",840,180);
	 
	 viewSpots[16] = new createViewSpot(16,"东苑","男生宿舍",300,310);
	 viewSpots[17] = new createViewSpot(17,"西苑","女生宿室",70,320);
	 viewSpots[18] = new createViewSpot(18,"生物与制药学院","学院大楼",400,320);
	 viewSpots[19] = new createViewSpot(19,"研究院","研究生大楼",450,350);
	 viewSpots[20] = new createViewSpot(20,"能源学院","学院大楼",500,300);
	 
	 viewSpots[21] = new createViewSpot(21,"田径场","标准田径场",550,250);
	 viewSpots[22] = new createViewSpot(22,"浦江宿舍","研究生宿舍",800,250);
	 viewSpots[23] = new createViewSpot(23,"体育馆","设施齐全，环境舒适",700,300);
	 viewSpots[24] = new createViewSpot(24,"南苑","男生宿舍",50,380);
	 viewSpots[25] = new createViewSpot(25,"笃行楼","教学楼",310,380);
	 
	 viewSpots[26] = new createViewSpot(26,"文科图书馆","藏书丰富，环境优雅",60,460);
	 viewSpots[27] = new createViewSpot(27,"沉毅广场","娱乐活动场所",310,460);
	 viewSpots[28] = new createViewSpot(28,"浦江教学楼","教学楼",440,410);
	 viewSpots[29] = new createViewSpot(29,"药物研究所","设备齐全，环境优美",350,500);
	 viewSpots[30] = new createViewSpot(30,"工大校门","南京工业大学正大门",440,550);
	 
	 ////////////////////////////////////////////////////
	 //                                                //
	 // 地图的邻接矩阵                                 //
	 ////////////////////////////////////////////////////
	
     //创建二维数组，并且对二维数组进行初始化
	
	 var viewMar = new Array(viewSpotCount+1);
     
     for( i = 1 ; i <= viewSpotCount ;i++){
	    
		viewMar[i] = new Array(viewSpotCount+1);
		
	 }
	 
	 for( A = 1 ; A <= viewSpotCount ; A++){
	        
			for( B = 1 ; B <= viewSpotCount ; B++){
			  
			   if(A == B)
				   
                  viewMar[A][B] = 0;	
				  
               else
				   
                  viewMar[A][B] = 100000;				   
			}
	 } 
	 
    //数组里面存储对应的矩阵权重
	
	viewMar[1][2] = 1000;
	viewMar[1][6] = 500;
	viewMar[1][8] = 100;
	viewMar[1][9] = 1500;
	viewMar[2][3] = 450;
	
	viewMar[3][4] = 100;
	viewMar[4][5] = 150;
	viewMar[4][11] = 1700;
	viewMar[5][11] = 1800;
	viewMar[6][7] = 50;
	
	viewMar[7][12] = 300;
	viewMar[8][14] = 800;
	viewMar[9][10] = 200;
	viewMar[10][14] = 400;
	viewMar[11][16] = 150;
	
	viewMar[11][17] = 600;
	viewMar[11][12] = 200;
	viewMar[12][13] = 200;
	viewMar[12][14] = 300;
	viewMar[14][21] = 800;
	
	viewMar[15][22] = 300;
	viewMar[16][17] = 500;
	viewMar[16][18] = 200;
	viewMar[17][24] = 1200;
	viewMar[18][19] = 50;
	
	viewMar[19][20] = 60;
	viewMar[21][22] = 50;
	viewMar[21][23] = 300;
	viewMar[22][23] = 200;
	viewMar[24][26] = 600;
	
	viewMar[25][27] = 100;
	viewMar[25][28] = 300;
	viewMar[27][29] = 200;
	viewMar[29][30] = 600;
	viewMar[23][30] = 1200;
	
	viewMar[26][30] = 400;
	viewMar[10][15] = 600;
	viewMar[18][21] = 400;
	viewMar[23][28] = 600;
	viewMar[16][25] = 300;
	
	for(A = 1 ; A <= viewSpotCount ; A++){
		
		for(B = A ; B <= viewSpotCount ; B++){
			
			viewMar[B][A] = viewMar[A][B];
		}
		
	}
	
//定义路径的颜色数组

var colors = new Array(16);

colors[1] = "#FF83FA";	
colors[2] = "#CAFF70";	
colors[3] = "#BF3EFF";	
colors[4] = "#B8860B";	
colors[5] = "yellow";	

colors[6] = "red";	
colors[7] = "blue";	
colors[8] = "#8DEEEE";	
colors[9] = "#CECEFF";	
colors[10] = "#483D8B";	

colors[11] = "#6B8E23";	
colors[12] = "#4876FF";	
colors[13] = "#8B6914";	
colors[14] = "#98FB98";	
colors[15] = "#A52A2A";	

	




	
	

