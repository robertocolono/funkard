package com.funkard.user.shipping.dto;

import lombok.*;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ShippingAddressDTO {
    private String id;
    private String fullName;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String postalCode;
    private String country;
    private boolean isDefault;
}
