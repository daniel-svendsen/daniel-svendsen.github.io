package com.svendsenphotography.backend.controller;

import com.svendsenphotography.backend.model.*;
import com.svendsenphotography.backend.repository.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cv")
@CrossOrigin(origins = "*") // Tillåt frontend att anropa API:et
public class CvController {
    private final CvContentRepository cvContentRepository;
    private final CvSkillRepository cvSkillRepository;
    private final CvExperienceRepository cvExperienceRepository;
    private final CvProjectRepository cvProjectRepository;
    private final CvContactRepository cvContactRepository;
    private final CvLanguageRepository cvLanguageRepository;

    public CvController(CvContentRepository cvContentRepository, CvSkillRepository cvSkillRepository,
                        CvExperienceRepository cvExperienceRepository, CvProjectRepository cvProjectRepository,
                        CvContactRepository cvContactRepository, CvLanguageRepository cvLanguageRepository) {
        this.cvContentRepository = cvContentRepository;
        this.cvSkillRepository = cvSkillRepository;
        this.cvExperienceRepository = cvExperienceRepository;
        this.cvProjectRepository = cvProjectRepository;
        this.cvContactRepository = cvContactRepository;
        this.cvLanguageRepository = cvLanguageRepository;
    }

    @GetMapping("/content")
    public List<CvContent> getCvContent() {
        return cvContentRepository.findAll();
    }

    @GetMapping("/skills")
    public List<CvSkill> getCvSkills() {
        return cvSkillRepository.findAll();
    }

    @GetMapping("/experience")
    public List<CvExperience> getCvExperience() {
        return cvExperienceRepository.findAll();
    }

    @GetMapping("/projects")
    public List<CvProject> getCvProjects() {
        return cvProjectRepository.findAll();
    }

    @GetMapping("/contact")
    public List<CvContact> getCvContact() {
        return cvContactRepository.findAll();
    }

    @GetMapping("/languages")
    public List<CvLanguage> getCvLanguages() {
        return cvLanguageRepository.findAll();
    }
}
