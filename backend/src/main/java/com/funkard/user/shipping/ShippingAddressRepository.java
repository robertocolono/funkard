package com.funkard.user.shipping;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface ShippingAddressRepository extends JpaRepository<ShippingAddress, String> {
    List<ShippingAddress> findByUserId(String userId);
    Optional<ShippingAddress> findByUserIdAndIsDefaultTrue(String userId);
}
