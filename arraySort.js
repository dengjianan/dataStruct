Array.prototype.bubbleSort = function(){//冒泡排序
	var len = this.length;
	var exchange = false;
	var temp;
	for(var i = 1;i < len;i++){
		for(var j = 0;j < len - i;j++){
			if(this[j] > this[j+1]){
				temp = this[j];
				this[j] = this[j+1];
				this[j+1] = temp;
				exchange = true;
			}
		}
		if(!exchange)
		return this;
	}
	return this;
}

Array.prototype.insertSort = function(){//直接插入排序
	var len = this.length;
	var temp;
	for(var i = 1;i < len;i++){
		temp = this[i];
		if(this[i] < this[i-1]){//小于上一个元素则需要排序
			for(var j = i-1;j > 0&&temp<this[j];j--){//寻找this[i]的插入位置，大于temp的元素都往后移一位
				this[j+1] = this[j];
			}
			this[j+1] = temp;
		}
	}
	return this;
}

Array.prototype.shellSort = function(){//希尔排序 对直接插入排序进行改进
	var temp,len = this.length;
	for(var increment = Math.floor(len/2);increment > 0;increment = Math.floor(increment/2)){
		for(var i = increment;i < len;i++){
			for(var j = i - increment;j >= 0&&this[j] > this[j + increment];j -= increment){//注意j -= increment相邻两组比完 还要与前面比
				temp = this[j];
				this[j] = this[j+increment];
				this[j+increment] = temp;
			}
		}
	}
	return this;
}

Array.prototype.selectSort = function(){//选择排序
	var temp,min_index,len = this.length;
	for(var i = 0;i < len;i++){
		min_index = i;
		for(var j = i + 1;j < len;j++){
			if(this[j] < this[min_index]){
				min_index = j;
			}
		}
		if(min_index != i){
			temp = this[i];
			this[i] = this[min_index];
			this[min_index] = temp;
		}
	}
	return this;
}