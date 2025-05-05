package com.svendsenphotography.backend.service;

import com.svendsenphotography.backend.model.*;
import com.svendsenphotography.backend.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CvService {
    private final CvContentRepository contentRepo;
    private final CvSkillRepository skillRepo;
    private final CvExperienceRepository expRepo;
    private final CvProjectRepository projRepo;
    private final CvContactRepository contactRepo;
    private final CvLanguageRepository langRepo;

    public CvService(CvContentRepository contentRepo, CvSkillRepository skillRepo,
                     CvExperienceRepository expRepo, CvProjectRepository projRepo,
                     CvContactRepository contactRepo, CvLanguageRepository langRepo) {
        this.contentRepo = contentRepo;
        this.skillRepo = skillRepo;
        this.expRepo = expRepo;
        this.projRepo = projRepo;
        this.contactRepo = contactRepo;
        this.langRepo = langRepo;
    }

    public List<CvContent> getContent() {
        return contentRepo.findAll();
    }

    public List<CvSkill> getSkills() {
        return skillRepo.findAll();
    }

    public List<CvExperience> getExperience() {
        return expRepo.findAll();
    }

    public List<CvProject> getProjects() {
        return projRepo.findAll();
    }

    public List<CvContact> getContacts() {
        return contactRepo.findAll();
    }

    public List<CvLanguage> getLanguages() {
        return langRepo.findAll();
    }
}
