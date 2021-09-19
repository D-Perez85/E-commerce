import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

//import { ProductoService } from "../services/productos.service";

@Component({
    selector: 'app-producto',
    templateUrl: 'crear-producto.component.html',
    styleUrls: ['crear-producto.component.css']
})

export class CrearProductoComponent implements OnInit{

    productoFrom: FormGroup;//FormGroup del producto
    
    constructor(private fb: FormBuilder){}
  
    ngOnInit(){
        this.productoFrom = this.fb.group({
            nombreProducto:["", Validators.required],
            precio:["",Validators.required],
            detalle:["",Validators.required],
            imagen:[""],
            disponible:[""]
        });
    }
    
    submit(){
        console.log(this.productoFrom.value);
        this.productoFrom.setValue({
            nombreProducto:"",
            precio:"",
            detalle:"",
            imagen:"",
            disponible:""
        });

    }

    }
    


  

