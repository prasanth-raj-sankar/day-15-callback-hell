let count = document.getElementById("countDown");

setTimeout(()=>{
    count.innerHTML = "<b>10</b>";
    setTimeout(() => {
        count.innerHTML = "<b>9</b>";
        setTimeout(() => {
            count.innerHTML = "<b>8</b>";
            setTimeout(() => {
                count.innerHTML = "<b>7</b>";
                setTimeout(() => {
                    count.innerHTML = "<b>6</b>";
                    setTimeout(() => {
                        count.innerHTML = "<b>5</b>";
                        setTimeout(() => {
                            count.innerHTML = "<b>4</b>";
                            setTimeout(() => {
                                count.innerHTML = "<b>3</b>";
                                setTimeout(() => {
                                    count.innerHTML = "<b>2</b>";
                                    setTimeout(() => {
                                        count.innerHTML = "<b>1</b>";
                                        setTimeout(() =>{
                                            count.innerHTML = "<p><b>Happy Independence Day</b></p>";
                                        },1000)
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
},1000);
