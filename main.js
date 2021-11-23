class Product{
    construcor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI{
    addProduct(product){

        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class= "card text-center mb-4">
         <div class = "card-body">
           <srtong>Product Name</strong> ${product.name}
           <srtong>Product Price</strong> ${product.price}
           <srtong>Product Year</strong> ${product.year}
           <a href="#" class= "btn tbn-danger" name= "delete">Delete</a>
         </div>
        
        </div>
        `;
        productList.appendChild(element);
    }

    resetFrom(){
        document.getElementById('product-form').reset();
       
    }

    deleteProduct(element){

        if(element.name=== 'delete'){
            element.parentElement.parentElement.parentElement.remove();
        }
      }

      showMessage(message, cssClass){
          const div = document.createElement('div');
          div.className = `alert alert- $(cssClass);`
          div.appendChild(document.createTextNode(message));
          

          //show in DOM

          const container = document.querySelector('/.container');
          const app =  document.querySelector('#App');
          container.insertBefore(div,app);
          setTimeout(function(){

            document.querySelector('.alert').remove();

          },3000);
      }


    showProduct(){

    }}

    //DOM eventos//
    
    document.getElementById('product-form').addEventListener('submit',function(e){
      const name = document.getElementById('name').value;
      const price = document.getElementById('price').value;
      const year = document.getElementById('year').value;

      /*console.log(name,price,year);*/

      const product = new Product(name,price,year);

      const ui = new UI();
      if(name==='' || price==='' || year===''){
          return  ui.showMessage('Complete Fields Please','danger');
      }
      ui.addProduct(product);
      ui.resetFrom();
      ui.showMessage('Product Added Seccesfully','succes');

      e.preventDefault();
    });

    document.getElementById('product-list').addEventListener('click',function(e){
        const ui = new UI();
        ui.deleteProduct(e.target);
    })