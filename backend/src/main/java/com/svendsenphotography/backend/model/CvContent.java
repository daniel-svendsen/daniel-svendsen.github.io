package com.svendsenphotography.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cv_content")
@Getter
@Setter
@NoArgsConstructor
public class CvContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String section;
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;
}
