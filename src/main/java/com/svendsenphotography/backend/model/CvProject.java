package com.svendsenphotography.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cv_projects")
@Getter
@Setter
@NoArgsConstructor
public class CvProject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cv_id")
    private CvContent cvContent;

    private String name;

    @Column(columnDefinition = "TEXT")
    private String details;
}
