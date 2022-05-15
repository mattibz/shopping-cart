import axios from "axios";

export default class Helper {

    constructor(){

       this.data = [
         {"id":1,"name":"Xhekpon® crema facial 40ml","image":"xhekpon-crema.jpg","price":"6,49","selected":false}, 
         {"id":2,"name":"Cerave ® Crema Hidratante 340ml","image":"cerave-crema.jpg","price":"11,70","selected":false},
         {"id":3,"name":"Hyabak Solución 10ml","image":"hyabak-solucion.jpg","price":"9,48","selected":false},
         {"id":4,"name":"Fotoprotector ISDIN","image":"fotoprotector-isdin.jpg","price":"10,50","selected":false},
         {"id":5,"name":"La justicia Colageno","image":"lajusticia-colageno.jpg","price":"12,50","selected":false},
         {"id":6,"name":"Piz Buin","image":"piz-buin.jpg","price":"6,30","selected":false}
       ];

    }
     

    getData(){
        
        return new Promise((resolve,reject) => {

            if(Array.isArray(this.data) && this.data.length >= 1){

                setTimeout(() => {
                    resolve(this.data);
                },5000);

            }else{
                reject(new Error('error'));
            }

        });
    }


    async getDataWithAxios(){

        try{

            const response = await axios.get("../backend/data.json");
            const { data } = response;
            return data;
            
        }catch(err){
            console.log(err.message);
        }

    }

}