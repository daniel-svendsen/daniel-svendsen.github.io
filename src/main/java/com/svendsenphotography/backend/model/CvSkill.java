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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTool() {
        return tool;
    }

    public void setTool(String tool) {
        this.tool = tool;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    @ManyToOne
    @JoinColumn(name = "cv_id")
    private CvContent cvContent;

    private String category;
    private String tool;
    private String icon;
}
