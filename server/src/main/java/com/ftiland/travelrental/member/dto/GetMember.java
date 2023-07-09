package com.ftiland.travelrental.member.dto;

import com.ftiland.travelrental.category.dto.CategoryDto;
import com.ftiland.travelrental.member.entity.Member;
import com.ftiland.travelrental.product.dto.CreateProduct;
import com.ftiland.travelrental.product.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

public class GetMember {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {

        private Long memberId;
        private String email;
        private String displayName;

        // 이미지 필드 필요
        private String addr;
        private Double latitude;
        private Double longitude;

        public static GetMember.Response from(Member member) {
            return Response.builder()
                    .memberId(member.getMemberId())
                    .email(member.getEmail())
                    .addr(member.getAddr())
                    .displayName(member.getDisplayName())
                    .longitude(member.getLongitude())
                    .latitude(member.getLatitude())
                    .build();
        }
    }
}
