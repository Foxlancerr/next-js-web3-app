// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductManager {

    enum EStatus { PENDING, COMPLETE, CANCELED }

    struct Product {
        uint256 id;
        string name;
        string category;
        uint256 price;
        EStatus status;
    }

    mapping(uint256 => Product) private products;
    uint256 private nextId;

    // Event to log product actions
    event ProductAdded(uint256 id, string name, string category, uint256 price, EStatus status);
    event ProductUpdated(uint256 id, string name, string category, uint256 price, EStatus status);
    event ProductDeleted(uint256 id);

    // Function to add a new product
    function addProduct(string memory _name, string memory _category, uint256 _price, EStatus _status) public {
        products[nextId] = Product(nextId, _name, _category, _price, _status);
        emit ProductAdded(nextId, _name, _category, _price, _status);
        nextId++;
    }

    // Function to edit an existing product
    function editProduct(uint256 _id, string memory _name, string memory _category, uint256 _price, EStatus _status) public {
        require(_id < nextId, "Product does not exist.");
        products[_id] = Product(_id, _name, _category, _price, _status);
        emit ProductUpdated(_id, _name, _category, _price, _status);
    }

    // Function to delete a product
    function deleteProduct(uint256 _id) public {
        require(_id < nextId, "Product does not exist.");
        delete products[_id];
        emit ProductDeleted(_id);
    }

    // Function to view a product
    function getProduct(uint256 _id) public view returns (Product memory) {
        require(_id < nextId, "Product does not exist.");
        return products[_id];
    }

    // Function to view all products
    function getAllProducts() public view returns (Product[] memory) {
        Product[] memory allProducts = new Product[](nextId);
        for (uint256 i = 0; i < nextId; i++) {
            if (products[i].id == i) {
                allProducts[i] = products[i];
            }
        }
        return allProducts;
    }
}
