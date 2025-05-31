package com.svendsenphotography.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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

    @Column(name = "link_href")
    @JsonProperty("link_href")
    private String linkHref;

    // Standard getters och setters, om du inte förlitar dig helt på Lombok:
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CvContent getCvContent() {
        return cvContent;
    }

    public void setCvContent(CvContent cvContent) {
        this.cvContent = cvContent;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getLinkHref() {
        return linkHref;
    }

    public void setLinkHref(String linkHref) {
        this.linkHref = linkHref;
    }
}
