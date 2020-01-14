var app = new function() {
    this.el = document.getElementById('countries');
    this.nombres = ['Alejandro', 'Yermain', 'Yesenia', 'Maria', 'Larusso', 'Jesus', 'Eurfran', 'Flavio', 'Euclides'];
    this.apellidos = ['Muñoz', 'Gonzales', 'García', 'Linares', 'Gómez', 'Caraballo', 'Marcano', 'Chimatenango', 'Temistocles'];
    this.email = ['vmuñoz@github.com', 'ggonzales@github.com', 'ygarcia@github.com', 'mlinares@github.com', 'lgomez@github.com', 'jcaraballo@github.com', 'emarcano@github.com', 'fchimatenango@github.com', 'etemistocles@github.com'];
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'country';
      if (data) {
        if (data > 1) {
          name = 'countries';
        }
        el.innerHTML = data + ' ' + name ;
      } else {
        el.innerHTML = 'No ' + name;
      }
    };
    
    this.FetchAll = function() {
      var data = '';
      if (this.nombres.length > 0) {
        for (i = 0; i < this.nombres.length; i++) {
          data += '<tr>';
          data += '<td>' + [i+1] + '</td>';
          data += '<td>' + this.nombres[i] + '</td>';
          data += '<td>' + this.apellidos[i] + '</td>';
          data += '<td class="text-center">' + this.email[i] + '</td>';
          data += '<td><button class="btn btn-sm btn-danger" onclick="app.Edit(' + i + ')" data-toggle="modal" data-target="#modalEditar"><span class="icon-pencil"></span></button></td>';
          data += '<td><button class="btn btn-sm btn-warning" onclick="app.Delete(' + i + ')"><span class="icon-bin"></span></button></td>';
          data += '</tr>';
        }
      }
      this.Count(this.nombres.length);
      return this.el.innerHTML = data;
    };
    this.Add = function (){
      nombre = document.getElementById('nombreNuevo');
      apellido = document.getElementById('apellidoNuevo');
      email = document.getElementById('emailNuevo');
      // Get the value
      var nombreX = nombre.value;
      var apellidoX = apellido.value;
      var emailX = email.value;
      if (nombreX){
        // Add the new value
        this.nombres.push(nombreX.trim());
        // Reset input value
        nombre.value = '';
        // Dislay the new list
        this.FetchAll();
      }
      if (apellidoX){
        // Add the new value
        this.apellidos.push(apellidoX.trim());
        // Reset input value
        apellido.value = '';
        // Dislay the new list
        this.FetchAll();
      }
      if (emailX){
        // Add the new value
        this.email.push(emailX.trim());
        // Reset input value
        email.value = '';
        // Dislay the new list
        this.FetchAll();
      }

      $('#rutNuevo').val('');
      $('#claveNuevo').val('');
      $('#claveRepetirNuevo').val('');
    };
    this.Edit = function (item) {
      var nom = document.getElementById('edit-nombre');
      var ape = document.getElementById('edit-apellido');
      var em = document.getElementById('edit-email');

      // Display value in the field
      nom.value = this.nombres[item];
      ape.value = this.apellidos[item];
      em.value = this.email[item];
      // Display fields
      //document.getElementById('spoiler').style.display = 'block';
      self = this;
      document.getElementById('actualizar').onsubmit = function() {
        // Get value
        var nombre = nom.value;
        var apellido = ape.value;
        var email = em.value;
        if (nombre) {
          // Edit value
          self.nombres.splice(item, 1, nombre.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
        if (apellido) {
          // Edit value
          self.apellidos.splice(item, 1, apellido.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
        if (email) {
          // Edit value
          self.email.splice(item, 1, email.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      }
    };
    this.Delete = function (item) {
      // Delete the current row
        Swal.fire({
          title: 'Mensaje!',
          text: "Esta seguro de eliminar este registro?.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
      }).
      then((result) => {
          if (result.value) {
            this.nombres.splice(item, 1);
            this.apellidos.splice(item, 1);
            this.email.splice(item, 1);
            // Display the new list
            this.FetchAll();
            Swal.fire({
              title: 'Acción realizada',
              text: "El registro se eliminó correctamente.",
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'ok'
            })
          }
          else{               
          }
      })
    };
    
  }
  app.FetchAll();
  function CloseInput() {
    //document.getElementById('spoiler').style.display = 'none';
  }