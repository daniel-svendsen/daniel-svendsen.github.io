package com.svendsenphotography.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cv_languages")
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties({"cvContent"}) // Ignorera cvContent-fältet vid serialisering
public class CvLanguage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Använd eager fetch så att data hämtas direkt (detta undviker eventuella lazy-loading-problem)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cv_id")
    private CvContent cvContent;

    private String name;
    private String level;

    // Om du vill vara extra säker, kan du skapa explicita getters:
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLevel() {
        return level;
    }
}
