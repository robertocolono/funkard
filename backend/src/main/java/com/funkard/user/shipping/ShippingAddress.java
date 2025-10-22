package com.funkard.user.shipping;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ShippingAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String userId;

    private String fullName;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String postalCode;
    private String country;

    private boolean isDefault = false;

    private LocalDateTime createdAt = LocalDateTime.now();
}
