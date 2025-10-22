package com.funkard.user.shipping;

import com.funkard.user.shipping.dto.ShippingAddressDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ShippingAddressService {

    private final ShippingAddressRepository repository;

    public List<ShippingAddressDTO> getAddresses(String userId) {
        return repository.findByUserId(userId).stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public ShippingAddressDTO addAddress(String userId, ShippingAddressDTO dto) {
        ShippingAddress address = toEntity(dto);
        address.setUserId(userId);

        // se è il primo indirizzo, impostalo come predefinito
        if (repository.findByUserId(userId).isEmpty()) {
            address.setDefault(true);
        }

        return toDTO(repository.save(address));
    }

    public ShippingAddressDTO updateAddress(String userId, String id, ShippingAddressDTO dto) {
        ShippingAddress address = repository.findById(id)
                .filter(a -> a.getUserId().equals(userId))
                .orElseThrow(() -> new RuntimeException("Indirizzo non trovato"));

        address.setFullName(dto.getFullName());
        address.setAddressLine1(dto.getAddressLine1());
        address.setAddressLine2(dto.getAddressLine2());
        address.setCity(dto.getCity());
        address.setPostalCode(dto.getPostalCode());
        address.setCountry(dto.getCountry());

        return toDTO(repository.save(address));
    }

    public void deleteAddress(String userId, String id) {
        repository.findById(id)
                .filter(a -> a.getUserId().equals(userId))
                .ifPresent(repository::delete);
    }

    public void setDefaultAddress(String userId, String id) {
        List<ShippingAddress> all = repository.findByUserId(userId);
        for (ShippingAddress a : all) {
            a.setDefault(a.getId().equals(id));
        }
        repository.saveAll(all);
    }

    private ShippingAddressDTO toDTO(ShippingAddress entity) {
        return ShippingAddressDTO.builder()
                .id(entity.getId())
                .fullName(entity.getFullName())
                .addressLine1(entity.getAddressLine1())
                .addressLine2(entity.getAddressLine2())
                .city(entity.getCity())
                .postalCode(entity.getPostalCode())
                .country(entity.getCountry())
                .isDefault(entity.isDefault())
                .build();
    }

    private ShippingAddress toEntity(ShippingAddressDTO dto) {
        return ShippingAddress.builder()
                .fullName(dto.getFullName())
                .addressLine1(dto.getAddressLine1())
                .addressLine2(dto.getAddressLine2())
                .city(dto.getCity())
                .postalCode(dto.getPostalCode())
                .country(dto.getCountry())
                .isDefault(dto.isDefault())
                .build();
    }
}
