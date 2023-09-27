import { Component } from '@angular/core';
import { InputsService } from '@app/data/services/api/product-api/inputs.service';
import { InputsModel } from '@app/shared/models/inputs-model';
import { InputsDetailsModel } from '@app/shared/models/inputs-details-model';

import { ProductModel } from '@app/shared/models/product-model';
import { ProductService } from '@app/data/services/api/product-api/product.service';

import { WarehouseService } from '@app/data/services/api/product-api/warehouse.service';
import { WarehousesModel } from '@app/shared/models/warehouses-model';

import { InputsTypesService } from '@app/data/services/api/product-api/inputs-types.service';
import { InputsTypesModel } from '@app/shared/models/inputs-types.models';

import { FormControl } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Observable } from 'rxjs/internal/Observable';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  model: InputsModel = new InputsModel();
  data: InputsDetailsModel = new InputsDetailsModel();

  products: ProductModel[] = [];
  selectedProduct: ProductModel | null = null;
  productInput = new FormControl('');
  filteredProducts: Observable<ProductModel[]>;

  warehouse: WarehousesModel[] = [];
  inputsTypes: InputsTypesModel[] = [];

  constructor(
    private service: InputsService,
    private productService: ProductService,
    private warehouseService: WarehouseService,
    private inputsTypesService: InputsTypesService
  ) {
    this.model.listModel = [];

    this.filteredProducts = this.productInput.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterProducts(value || ''))
    );
  }
  eliminarRegistro(index: number): void {
    // Utiliza el índice para eliminar el elemento del array
    this.model.listModel.splice(index, 1);
    // Recalcula cualquier cosa que sea necesario después de la eliminación
    // Por ejemplo, puedes volver a calcular totales o realizar otras actualizaciones
    this.filteredProducts = this.productInput.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterProducts(value || ''))
    );
  }
  filterProducts(value: string): ProductModel[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';

    // Filtrar los productos que no están en this.model.listModel
    const filteredProducts = this.products.filter(
      (producto) =>
        !this.model.listModel.some(
          (item) => item.productID === producto.productID
        ) &&
        (producto.productName.toLowerCase().includes(filterValue) ||
          producto.productID.toString().includes(filterValue))
    );

    return filteredProducts;
  }

  displayProduct(product: ProductModel | null): string {
    return product ? `${product.productID} - ${product.productName}` : '';
  }

  // Función para manejar la selección de un producto
  onProductSelected(event: MatOptionSelectionChange<ProductModel>): void {
    const selectedProduct = event.source.value;

    this.selectedProduct = selectedProduct;
    this.add();
  }
  ngOnInit(): void {
    this.loadProducts();
    this.loadWarehouses();
    this.loadInputsTypes();
  }
  post() {
   
    const sumatoria = this.model.listModel .reduce((total, current) => {
      return {
        discount: +total.discount + +current.discount,
        quantity: +total.quantity + +current.quantity,
        unitPrice: +total.unitPrice + +current.unitPrice,
        taxAmt: +total.taxAmt + +current.taxAmt,
        lineTotal: +total.lineTotal + +current.lineTotal,
      };
    }, {
      discount: 0,
      quantity: 0,
      unitPrice: 0,
      taxAmt: 0,
      lineTotal:0,
    });

    this.model.companyID = 1;
    this.model.branchID = 1;
    this.model.employeeID = 1;
    this.model.subTotal = sumatoria.quantity*sumatoria.unitPrice;
    this.model.discount = sumatoria.discount;
    this.model.taxAmt = sumatoria.taxAmt;
    this.model.freight = 0;
    this.model.totalDue = sumatoria.lineTotal;
    this.model.currencyCode = 'C';
    this.model.status = 1;
    this.service.post(this.model).subscribe((_model) => {

      console.log('Producto creado:', _model);
      
     
    });
  }
  loadProducts() {
    this.productService.getProducts().subscribe((_products) => {
      this.products = _products;
      this.filteredProducts = this.productInput.valueChanges.pipe(
        startWith(''),
        map((value) => this.filterProducts(value || ''))
      );
    });
  }
  loadWarehouses() {
    this.warehouseService.get().subscribe((_warehouse) => {
      this.warehouse = _warehouse;
    });
  }
  loadInputsTypes() {
    this.inputsTypesService.get().subscribe((_inputsTypes) => {
      this.inputsTypes = _inputsTypes;
    });
  }
  add() {

    
    const newData = { ...this.data }; // Clonar this.data

    newData.productID = this.selectedProduct?.productID || 0;
    newData.companyID = 1;
    newData.branchID = 1;
    newData.warehouseID = this.model.warehouseID;
    newData.inputTypeID = this.model.inputTypeID;
    newData.measureID = 1;
    newData.quantity = 0;
    newData.discount = 0;
    newData.unitPrice = 0;
    newData.taxAmt = 0;

    /* const index = this.products.findIndex(p => p.productID === newData.productID);
    if (index !== -1) {
      this.products.splice(index, 1);
    }*/
    const exists = this.model.listModel.some(
      (item) => item.productID === newData.productID
    );

    if (!exists) {
      // Agregar el producto solo si no existe
      this.model.listModel.push(newData);
    }
  }
  getProductNombre(productID: number): string {
    const producto = this.products.find((p) => p.productID === productID);
    return producto ? producto.productName : ''; // Devuelve el nombre si se encuentra, de lo contrario, una cadena vacía
  }

  calculateLineTotal(item: InputsDetailsModel) {
    item.lineTotal =
      item.quantity * item.unitPrice - item.taxAmt - item.discount;
  }
  
}
