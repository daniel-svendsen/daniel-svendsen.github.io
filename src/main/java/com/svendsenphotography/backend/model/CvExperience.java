package com.svendsenphotography.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cv_experience")
@Getter
@Setter
@NoArgsConstructor
public class CvExperience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cv_id")
    private CvContent cvContent;

    private String type;
    private String year;

    @Column(columnDefinition = "TEXT")
    private String details;

    private String linkText;
    private String linkHref;
}
