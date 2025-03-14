package com.svendsenphotography.backend.repository;

import com.svendsenphotography.backend.model.CvProject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CvProjectRepository extends JpaRepository<CvProject, Long> {
}