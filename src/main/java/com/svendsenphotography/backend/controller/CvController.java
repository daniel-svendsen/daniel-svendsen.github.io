package com.svendsenphotography.backend.controller;

import com.svendsenphotography.backend.model.*;
import com.svendsenphotography.backend.service.CvService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cv")
@CrossOrigin(origins = "*")
public class CvController {
    private final CvService cvService;

    public CvController(CvService cvService) {
        this.cvService = cvService;
    }

    @GetMapping("/content")
    public List<CvContent> getCvContent() {
        return cvService.getContent();
    }

    @GetMapping("/skills")
    public List<CvSkill> getCvSkills() {
        return cvService.getSkills();
    }

    @GetMapping("/experience")
    public List<CvExperience> getCvExperience() {
        return cvService.getExperience();
    }

    @GetMapping("/projects")
    public List<CvProject> getCvProjects() {
        return cvService.getProjects();
    }

    @GetMapping("/contact")
    public List<CvContact> getCvContact() {
        return cvService.getContacts();
    }

    @GetMapping("/languages")
    public List<CvLanguage> getCvLanguages() {
        return cvService.getLanguages();
    }
}
