class Music{
    constructor(title,singer,image,file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }

    getName(){
        return this.title+"-"+this.singer;
    }
}

const musicList=[
    new music("güzel bir gün","teoman","1.jpg","1.mp3"),
    new music("madem","dolu kadehi ters tut","1.jpg","2.mp3"),
    new music("istanbul","sertab erener","1.jpg","3.mp3")
]