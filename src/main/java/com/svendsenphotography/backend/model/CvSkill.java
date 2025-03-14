package com.svendsenphotography.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cv_skills")
@Getter
@Setter
@NoArgsConstructor
public class CvSkill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cv_id")
    private CvContent cvContent;

    private String category;
    private String tool;
    private String icon;
}
