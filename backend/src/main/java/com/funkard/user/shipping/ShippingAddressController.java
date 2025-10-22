package com.funkard.user.shipping;

import com.funkard.user.shipping.dto.ShippingAddressDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user/addresses")
@RequiredArgsConstructor
public class ShippingAddressController {

    private final ShippingAddressService service;

    // 👉 GET tutti gli indirizzi utente
    @GetMapping
    public ResponseEntity<List<ShippingAddressDTO>> getAll(
            @RequestHeader("X-User-Id") String userId) {
        return ResponseEntity.ok(service.getAddresses(userId));
    }

    // 👉 POST nuovo indirizzo
    @PostMapping
    public ResponseEntity<ShippingAddressDTO> add(
            @RequestHeader("X-User-Id") String userId,
            @RequestBody ShippingAddressDTO dto) {
        return ResponseEntity.ok(service.addAddress(userId, dto));
    }

    // 👉 PUT aggiorna indirizzo
    @PutMapping("/{id}")
    public ResponseEntity<ShippingAddressDTO> update(
            @RequestHeader("X-User-Id") String userId,
            @PathVariable String id,
            @RequestBody ShippingAddressDTO dto) {
        return ResponseEntity.ok(service.updateAddress(userId, id, dto));
    }

    // 👉 DELETE elimina indirizzo
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @RequestHeader("X-User-Id") String userId,
            @PathVariable String id) {
        service.deleteAddress(userId, id);
        return ResponseEntity.noContent().build();
    }

    // 👉 PATCH imposta predefinito
    @PatchMapping("/{id}/default")
    public ResponseEntity<Void> setDefault(
            @RequestHeader("X-User-Id") String userId,
            @PathVariable String id) {
        service.setDefaultAddress(userId, id);
        return ResponseEntity.noContent().build();
    }
}
